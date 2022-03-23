import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Home() {
  return (
    <div>
      <Typography variant="h4">Eatigo Website Redesign</Typography>
      <Typography variant="h6">Here are the links to the original / redesigned sites:</Typography>
      <Link component={Link} href="/cs4249-eatigo-website-redesign/#/home?breadcrumbs=false&filters=false&resetsize=small&searchbar=false"><br/>Original Home <br/><br/></Link>
      <Link component={Link} href="/cs4249-eatigo-website-redesign/#/home?breadcrumbs=true&filters=true&resetsize=large&searchbar=true">Redesigned Home <br/><br/></Link>
    </div>
  );
}

export default Home;
