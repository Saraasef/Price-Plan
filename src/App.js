import React from "react";
import { Row, Col, Container } from 'react-grid';
import styles from "./App.module.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useState } from "react";
import logo from "./Logos/information-mark.svg";
import icon from "./Icons/divide-mathematical-sign.svg";
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

function APP() {
  const [price, setPrice] = useState([8, 14, 20]);
  const changToYearly = () => {
    setPrice([80, 140, 200])
  }
  const changToMonthly = () => {
    setPrice([8, 14, 20])
  }
  const renderTooltip = props => (
    <Tooltip {...props} className={styles.infobox}>
      <h3 className={styles.infoboxdiv}>Core HR</h3>
      <p className={styles.infoboxdiv}>Minimize HR headaches so you can get back to business.</p>
      <div className={styles.infoboxdiv}>
        <input type="radio"></input><lable>Hiring "&" onboarding</lable><div></div>
        <input type="radio"></input><lable>Employee database</lable><div></div>
        <input type="radio"></input><lable>Document management</lable><div></div>
        <input type="radio"></input><lable>Reporting</lable><div></div>
        <h3>All feathures</h3>
      </div></Tooltip>
  );
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.pricingTotal}>
      <h1>Base Plans</h1>
      <span className={styles.pricingtitle1} onClick={changToMonthly}>Monthly</span>
      <img alt="slash" className={styles.justify1divslash} src={icon} />
      <span className={styles.pricingtitle2} onClick={changToYearly}>Yearly</span><div className={styles.space}></div>
      <Container className={styles.container}>
        <Row>
          <Col className={styles.justify1} lg={3}>
            <h3 className={styles.justify1h3}>Essential</h3>
            <div className={styles.justify1div}>
              <p>Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s,
                and show meaningful appreciation when it matters most using High Fives.</p>
            </div>
            <div className={styles.space}></div>
            <div className={styles.justify1maindivprice}>
              <span className={styles.justify1divprice}><b>{price[0]}€</b></span>
              <img alt="slash" className={styles.justify1divslash} src={icon} />
              <span className={styles.justify1divperiod1}>Per month</span>
              <br />
              <span className={styles.justify1divperiod2}>per employee</span>
            </div>
            <div className={styles.space}></div><hr />
            <div className={styles.space}></div>
            <div className={styles.justify1divinput}>
              <input type="radio"></input><lable>Core HR</lable>
              <div className={styles.space}></div>
              <input type="radio"></input><lable>Payroll</lable>
              <div className={styles.space}></div>
              <input type="radio"></input><lable>Recruiting</lable>
              <div className={styles.space}></div>
              <input type="radio"></input><lable>Employee HUB</lable>
            </div>
            <div className={styles.space}></div>
            <div className={styles.space2}></div>
            <button type="button" onClick={handleClickOpen} className={styles.justify1divbutton}>Select Plan</button>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <div className={styles.dialogue}>
                <h3>Please select your pay mode</h3>
                <div className={styles.dialogues}>
                  <input type="radio"></input><lable>Paypall</lable>
                  <div className={styles.space2}></div>
                  <input type="radio"></input><lable>Credit Card</lable>
                  <div className={styles.space2}></div>
                  <input type="radio"></input><lable>Debit Card</lable>
                </div>
                <div className={styles.space}></div>
                <button type="submit" className={styles.dialoguesbutton}>Proceed</button>
              </div>
            </Dialog>
          </Col>
          <Col className={styles.justify2} lg={3}>
            <h3 className={styles.justify1h3}>Growth</h3>
            <div className={styles.justify2div}>
              <p>Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s,
                and show meaningful appreciation when it matters most using High Fives.</p>
            </div>
            <div className={styles.space}></div>
            <div className={styles.justify1maindivprice}>
              <span className={styles.justify1divprice}><b>{price[1]}€</b></span>
              <img alt="slash" className={styles.justify1divslash} src={icon} />
              <span className={styles.justify1divperiod1}>Per month</span>
              <br />
              <span className={styles.justify2divperiod2}>per employee</span>
            </div>
            <div className={styles.space}></div><hr />
            <div className={styles.space}></div>
            <div className={styles.justify1divlables}>
              <lable>Core HR</lable><img alt="icon" className={styles.justify2divicons} src={logo} />
              <div className={styles.space}></div>
              <lable>Payroll</lable><img alt="icon" className={styles.justify2divicons} src={logo} />
              <div className={styles.space}></div>
              <lable>Recruiting</lable><img alt="icon" className={styles.justify2divicons} src={logo} />
              <div className={styles.space}></div>
              <lable>Employee HUB</lable><img alt="icon" className={styles.justify2divicons} src={logo} />
              <div className={styles.space2}></div>
              <span className={styles.justify2divplus}><b>+</b></span>
              <div className={styles.space2}></div>
              <lable>Performance Management</lable><img alt="icon" className={styles.justify2divicons} src={logo} />
              <div className={styles.space}></div>
              <lable>Shift Planning</lable><img alt="icon" className={styles.justify2divicons} src={logo} />
            </div>
            <div className={styles.space}></div>
            <button type="button" className={styles.justify1divbutton}>Select Plan</button>
          </Col>
          <Col className={styles.justify3} lg={3}>
            <h3 className={styles.justify1h3}>Performance</h3>
            <div className={styles.justify3div}>
              <p>Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s,
                and show meaningful appreciation when it matters most using High Fives.</p>
            </div>
            <div className={styles.space}></div>
            <div className={styles.justify1maindivprice}>
              <span className={styles.justify1divprice}><b>{price[2]}€</b></span>
              <img alt="slash" className={styles.justify1divslash} src={icon} />
              <span className={styles.justify1divperiod1}>Per month</span>
              <br />
              <span className={styles.justify3divperiod2}>per employee</span>
            </div>
            <div className={styles.space}></div><hr />
            <div className={styles.space}></div>
            <div className={styles.justify1divlables}>
              <lable>Core HR</lable><OverlayTrigger placement="bottom" overlay={renderTooltip}><img alt="icon" className={styles.justify3divicons} src={logo} /></OverlayTrigger>
              <div className={styles.space}></div>
              <lable>Payroll</lable><img alt="icon" className={styles.justify3divicons} src={logo} />
              <div className={styles.space}></div>
              <lable>Recruiting</lable><img alt="icon" className={styles.justify3divicons} src={logo} />
              <div className={styles.space}></div>
              <lable>Employee HUB</lable><img alt="icon" className={styles.justify3divicons} src={logo} />
              <div className={styles.space}></div>
              <lable>Performance Management</lable><img alt="icon" className={styles.justify3divicons} src={logo} />
              <div className={styles.space}></div>
              <lable>Shift Planning</lable><img alt="icon" className={styles.justify3divicons} src={logo} />
              <div className={styles.space2}></div>
              <span className={styles.justify2divplus}><b>+</b></span>
              <div className={styles.space2}></div>
              <lable>Compensation Management</lable><img alt="icon" className={styles.justify3divicons} src={logo} />
              <div className={styles.space}></div>
              <lable>Career Path Management</lable><img alt="icon" className={styles.justify3divicons} src={logo} />
            </div>
            <div className={styles.space}></div>
            <div className={styles.space2}></div>
            <button type="button" className={styles.justify1divbutton}>Select Plan</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default APP;