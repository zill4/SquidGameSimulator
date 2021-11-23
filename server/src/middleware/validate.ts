import { Request, Response, NextFunction } from 'express'

export const validRegister = async (req: Request, res: Response, next: NextFunction) => {

    const { name, account, password } = req.body

    const errors = [];

    if (!name) {
        errors.push("Please add a username")
    } else if (name.length > 20) {
        errors.push("Username is greater than 20 characters long")
    }

    if (!account) {
        errors.push("Please add email")
    }

    if (password.length < 6) {
        errors.push("Password must be at least 6 characters long")
    }

    if (errors.length > 0) {
        return res.status(400).json({ msg: errors })
    }

    next();
}

// This probably should change...

export function validateEmail(email: String) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}