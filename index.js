import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as memeplz from './commands/memeplz.js';



config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

function showOnline(){
    console.log('I am online');
}

async function handleInteraction(interaction){
    if (!interaction.isCommand()) return;
    if (interaction.commandName === 'memeplz'){
        await memeplz.execute(interaction);
    }
}

client.once(Events.ClientReady, showOnline);

client.login(process.env.TOKEN);

client.on(Events.InteractionCreate, handleInteraction)