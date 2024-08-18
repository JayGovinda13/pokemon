import React from "react";
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

interface PokemonCardProps {
    pokemon: {
        name: string;
        sprites: {front_defaut: string},
    }
}