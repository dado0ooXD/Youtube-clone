import React from 'react';
import { Stack } from '@mui/material';

import { categories } from '../utils/constants';

const selectedCategory = "New"

const SideBar = () => (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "95%" },
            flexDirection: { md: "column" },
        }}
    >
        {categories.map((item, index) => (
            <button className="category-btn"
             style={{ background: item.name === selectedCategory && "#fc1503", color: "white" }}
             key={index}
             >
                <span>{item.icon}</span>
                <span>{item.name}</span>
            </button>
        ))}
    </Stack>
)

export default SideBar