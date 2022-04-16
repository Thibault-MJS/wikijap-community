import { Client, Collection } from "discord.js";

class WikiClient extends Client {
    public commands: Collection<string, any>;
    public aliases: Collection<string, string>;

    constructor(token?: string) {
        super({ intents: 32767 });
        this.token = token;
        ["commands", "aliases"].forEach(x => this[x] = new Collection());
    }

    run(): void {
        this.login(this.token);
    }
}

export default WikiClient;