import models from "../models.js";
const { User } = models;

const generateJWT = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res) {
    try {
      let { email, password } = req.body;
      email = email?.trim();
      phone = phone?.trim();

      if (!email) {
        return res.status(400).json("Поле email обязательное");
      }
      if (!password) {
        return res.status(400).json("Телефон номер обязателен");
      }

      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
        return res
          .status(500)
          .json({ message: "Такой пользователь уже существует" });
      }

      const hashPassword = bcrypt.hash(password, 7);
      const user = User.create({ email, password: hashPassword });
      const token = generateJWT(user.id, user.email);
      return res.status(200).json({ token });
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ message: "Внутренняя ошибка сервера", error: e.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res
          .status(404)
          .json({ message: "Такого пользователя не существует" });
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Указан неверный пароль" });
      }

      const token = generateJWT(user.id, user.email);
      return res.status(200).json({ token });
    } catch (e) {
      console.error("Ошибка при входе:", e);
      return res.status(500).json({ message: "Ошибка сервера", e });
    }
  }
}

export default new UserController();
