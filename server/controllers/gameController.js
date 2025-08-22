import nodemailer from "nodemailer";
import models from "../models.js";
const { User, Game } = models;

class GameController {
  async savePhysicalAddress(req, res) {
    const user_id = req.user.id;
    const user_email = req.user.email;
    const payload = req.body; // { address: string, name: string, phone: string }

    if (!payload) {
      res.status(404).json({ message: "Все поля обязательны" });
    }

    await User.update(
      { address: payload.address, name: payload.name, phone: payload.phone },
      { where: { id: user_id } }
    );
    const mailOptions = {
      from: "bakdauletabdubek@gmail.com",
      to: user_email,
      subject: "You won a prize from Ferrero Rocher",
      html: `
            <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
            <h1>Дорогой участник ${req.body.name}</h1>
            <p>Ваш приз прибудет по адресу ${req.body.address}</p>
            <p>Заранее позвоним по номеру который вы указали ранее</p>
            </div>
        `,
    };

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bakdauletabdubek@gmail.com",
        pass: "ubtj zvfz hvwx obcp",
      },
    });

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send(`Email sent: ${info.response}`);
    });
  }

  async sendEmail(req, res) {
    const email = req.user.email;

    const mailOptions = {
      from: "bakdauletabdubek@gmail.com",
      to: email,
      subject: "You won a prize from Ferrero Rocher",
      html: `
            <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
            <p>PROMO: 05Z-A05-</p>
            </div>
        `,
    };

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bakdauletabdubek@gmail.com",
        pass: "ubtj zvfz hvwx obcp",
      },
    });

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send(`Email sent: ${info.response}`);
    });
  }

  async playGame(req, res) {
    const user_id = req.user.id;
    const payload = req.body; // { is_winner: true | false, result: physical | digital }
    const game_info = await Game.findOne({ where: { user_id: user_id } });

    if (payload.is_winner) {
      await Game.update(
        {
          attempts: game_info.attempts + 1,
          is_winner: payload.is_winner,
          result: payload.result,
        },
        { where: { user_id: user_id } }
      );
    } else {
      await Game.update(
        { attempts: game_info.attempts + 1 },
        { where: { user_id: user_id } }
      );
    }

    return res.status(200).json({});
  }

  async checkStatus(req, res) {
    const user_id = req.user.id;

    const game_info = await Game.findOne({ where: { user_id } });

    const now = Date.now();
    const updatedAt = new Date(game_info.updatedAt).getTime();

    const diff = now - updatedAt;

    if (game_info.is_winner) {
      return res.status(200).json({ can_play: false, winner: true });
    }

    if (game_info.attempts >= 3 && diff > 24 * 60 * 60 * 1000) {
      await Game.update({ attempts: 0 }, { where: { user_id: user_id } });
      return res.status(200).json({ can_play: true });
    }

    if (game_info.attempts < 3) {
      return res.status(200).json({ can_play: true });
    }

    return res.status(200).json({ can_play: false });
  }
}

export default new GameController();
