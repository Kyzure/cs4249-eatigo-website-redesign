import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function BreadCrumbs(props) {

  let homePath = "/cs4249-eatigo-website-redesign/#/home?" + props.path

  function resultCrumbs() {
    if (props.search != null) {
      let resultPath = "/cs4249-eatigo-website-redesign/#/result?" + props.path + "&search=" + props.search
      return <Link underline="hover" color="inherit" href={ resultPath }> Result </Link>
    }
  }

  if (props.breadcrumbs === null || !props.breadcrumbs) {
    return (null)
  }
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href={ homePath }>
        Home
      </Link>
      {resultCrumbs()}
      <Typography color="primary">{props.page}</Typography>
    </Breadcrumbs>
  );
}

export default BreadCrumbs;
