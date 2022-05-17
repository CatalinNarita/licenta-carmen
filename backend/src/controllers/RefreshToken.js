import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.sendStatus(401);
    }
    const users = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    const [user] = users;
    if (!user) {
      return res.sendStatus(403);
    }
    const { id, first_name: firstName, last_name: lastName, email } = user;
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          return res.sendStatus(403);
        }
        const accessToken = jwt.sign(
          { id, firstName, lastName, email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "15s",
          }
        );
        res.json({ accessToken });
      }
    );
  } catch (error) {
    res.send(500);
  }
};
