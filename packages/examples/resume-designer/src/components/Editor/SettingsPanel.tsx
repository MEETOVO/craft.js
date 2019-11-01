import React from 'react';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid, Divider, Typography, Chip } from '@material-ui/core'
import { useNode } from 'craftjs';
import { makeStyles } from '@material-ui/core/styles';
const usePanelStyles = makeStyles(theme => ({
  root: {
    background: "transparent", 
    boxShadow: "none",
    "&.Mui-expanded": {
      margin: "0 0",
      minHeight: "50px",
      "&:before" : {
        opacity: "1"
      },
      "& + .MuiExpansionPanel-root:before " : {
       display:"block"
      }
    }
  }
}));


const useSummaryStyles = makeStyles(theme => ({
  root: {
    "min-height": "36px",
    "padding" : 0
  },
  content: {
    "margin" : "0px"
  }
}));

export const SettingsPanel = ({title, props, summary, children}: any) => {
  const panelClasses = usePanelStyles({});
  const summaryClasses = useSummaryStyles({});
  const {nodeProps} = useNode((node) => ({
    nodeProps: props.reduce((res: any, key: any) => {
      res[key] = node.data.props[key] || null; 
      return res;
    }, {})
  }));
  return (
    <ExpansionPanel classes={panelClasses}>
      <ExpansionPanelSummary classes={summaryClasses}>
        <div className='px-6 w-full'>
        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={4}>
            <h5 className='text-xs text-light-gray-1 text-left font-medium text-dark-blue uppercase'>{title}</h5>
          </Grid>
          <Grid item xs={8}>
            <h5 className='text-light-gray-2 text-sm text-right text-dark-blue'>{
              summary(
                props.reduce((acc: any, key: any) => {
                  acc[key] = nodeProps[key];
                  return acc;
                }, {})
              )
            }</h5>
          </Grid>
        </Grid>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ padding: "0px 24px 20px" }}>
        <Divider />
        <Grid container alignItems="center" spacing={1}>
          {children}
        </Grid>
      </ExpansionPanelDetails>

    </ExpansionPanel>
  )
}