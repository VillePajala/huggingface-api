import express from 'express';
import { HfInference } from '@huggingface/inference';
import HF_TOKEN from './config.js';

const hf = new HfInference(HF_TOKEN)

const question = "Explain quantum physics"

const response = await hf.textGeneration({
    inputs: question,
    model: "google/gemma-7b"
})

console.log(response)