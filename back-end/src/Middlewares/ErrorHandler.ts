// Criei esse middleware para tratar os erros que podem ocorrer no projeto
// Facilitando a leitura de erros caso ocorra algum problema

import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(500).json({ message: error.message });
    next();
  }
}

export default ErrorHandler;