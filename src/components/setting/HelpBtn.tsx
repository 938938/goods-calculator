'use client';

import { Button } from '@material-tailwind/react';

const HelpBtn = () => {
  return (
    <Button
      onClick={() => {
        window.open(
          'https://feline-meal-14c.notion.site/1d91c453f65a80bd9d86de28c9b7116d'
        );
      }}
      className='w-full'
    >
      도움말
    </Button>
  );
};

export default HelpBtn;
