import {readdirSync} from 'fs';
import WikiClient from './WikiClient';

class CommandHandler {
    protected client: WikiClient;
    public commandDir: string;

    constructor(client: WikiClient, commandDir: string) {
        this.client = client;
        this.commandDir = commandDir;
    }

    initialize() {
        
    }
}

export default CommandHandler;