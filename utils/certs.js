'use server';

import { connect } from './db';
import Cert from '../models/Cert';

const GET = async () => {
    try {
        await connect();

        const posts = await Cert.find();

        return JSON.parse(JSON.stringify(posts));
    } catch (error) {
        console.error("Error in connecting to the database:", error);
        return null;
    }
}

export default GET;
