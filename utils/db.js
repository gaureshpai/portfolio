'use server';

import mongoose from 'mongoose';

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "Certificates", 
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error("Error in connecting MongoDB");
    }
};

export default connect;
