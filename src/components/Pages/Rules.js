import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import RulesIcon from '@material-ui/icons/LiveHelp';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import Content from '../Content/Content';

const MyListItem = ({ primary = null, secondary = null }) => <ListItem style={{ padding: 5 }} variant="subtitle1">
  <ListItemText primary={primary} secondary={secondary} />
</ListItem>;

const Instagram = ({ onClick }) => <span onClick={onClick}> <img style={{ height: 24, width: 24, marginLeft: 5, marginRight: 5, marginBottom: -8, color: '#fff' }} src="/img/instagram.svg" /></span>;
const Facebook = ({ onClick }) => <span onClick={onClick}> <img style={{ height: 22, width: 22, marginLeft: 5, marginRight: 5, marginBottom: -8, color: '#fff' }} src="/img/facebook.png" /></span>;

class Rules extends Component {
  onInstagramIconClick() {
    window.location = 'instagram://user?username=zaxisapp';
  }
  render() {
    const { classes } = this.props;
    return <Content>
      <RulesIcon className={classes.rulesIcon} />
      <Typography variant="overline">Rules</Typography>
      <List dense>
        <MyListItem primary="This is not your everyday quiz! This is an Online Treasure Hunt. " />
        <MyListItem primary="This hunt consists of 30 levels. Each level contains a crypt/task/puzzle, solving which you will get the answer to the next level." secondary="And the goal is to solve all the levels." />
        <MyListItem primary="All answers are lowercase strings with only alphabets/numbers." secondary="And that means no spaces or special characters." />
        <MyListItem primary="There are 2 clues every level." secondary="Look out for hidden clues apart from the given clues." />
        <MyListItem primary="We might also put clues in facebook or instagram or maybe even as push notifications." />
        <MyListItem primary="A Leaderboard shows who is on top based on a first come first serve basis." secondary="Good Luck!" />
        <MyListItem secondary={<span style={{ float: 'right', fontStyle: 'italic' }}><Instagram /> zaxisapp <Facebook /> zaxisapp</span>} />
      </List></Content>
  }
}

export default withStyles(styles)(Rules);