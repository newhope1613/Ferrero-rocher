import models from "../models.js"
const { User } = models

const generateJWT = (id, email) => {
    return jwt.sign({ id, email }, process.env.JWT_SECRET, {
        expiresIn: "24h",
    });
};

class UserController {
    async registration(req, res) {
        try {
            let { email, password } = req.body
            email = email?.trim()
            phone = phone?.trim()

            if (!email) {
                return res.status(400).json("Поле email обязательное")
            }
            if (!password) {
                return res.status(400).json("Телефон номер обязателен")
            }

            const candidate = await User.findOne({ where: { email } })
            if (candidate) {
                return res.status(500).json({ message: "Такой пользователь уже существует" })
            }

            const hashPassword = bcrypt.hash(password, 7)
            const user = User.create({ email, password: hashPassword })
            const token = generateJWT(user.id, user.email)
            return res.status(200).json({ token })
        } catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Внутренняя ошибка сервера", error: e.message });
        }
    }
}


export default new UserController()