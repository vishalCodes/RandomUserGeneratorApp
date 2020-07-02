import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import {
  FaEnvelope,
  FaMapMarked,
  FaPhone,
  FaBirthdayCake,
  FaChild,
} from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150px"
          weight="150px"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h1>
            <span className="mr-2">{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </CardTitle>
        <CardText>
          <FaMapMarked size="8%" className="mr-2" />
          <span>{details.location?.city}</span>
        </CardText>
        <CardText>
          <FaEnvelope size="8%" className="mr-2" />
          <span>{details.email}</span>
        </CardText>
        <CardText>
          <FaPhone size="8%" className="mr-2" />
          <span>{details.phone}</span>
        </CardText>
        <CardText>
          <FaBirthdayCake size="8%" className="mr-2" />
          <span>{details.dob?.age}</span>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
