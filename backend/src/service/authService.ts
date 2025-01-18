import * as userRepository from '../repository/authRepository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUser } from '../interface/userInterface';

export const registerUser = async (user: IUser) => {
  const existingUser = await userRepository.getUserByEmail(user.email);
  if (existingUser) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(user.password, 10);
  const newUser = await userRepository.createUser({ ...user, password: hashedPassword });
  return newUser;
};

export const loginUser = async (email: string, password: string) => {
  const user = await userRepository.getUserByEmail(email);
  if (!user) throw new Error('User not found');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error('Invalid password');

  const token = jwt.sign({ id: user.id, email: user.email }, "abcd");

  return { token, user };
};
