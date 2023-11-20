import { SlashCommandBuilder } from "discord.js";
import { getRandomImageLink } from "../memeselector.js";

const randomMeme = getRandomImageLink();

export const data = new SlashCommandBuilder()
    .setName('memeplz')
    .setDescription('Provides meme for your entertainment');

export async function execute(interaction){
    await interaction.reply(randomMeme);
}


