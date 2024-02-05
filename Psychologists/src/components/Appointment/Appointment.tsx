import React, { useState } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { AppointmentProps, InitialAppointmentValues } from "../../types/types";
import {
  StyledBtn,
  StyledInput,
  StyledLabel,
  StyledTitle,
} from "../LogIn/Login.styled";
import {
  ErrorText,
  StyledComment,
  StyledImg,
  StyledImgWrapper,
  StyledName,
  StyledPhone,
  StyledTimeWrapper,
} from "./Appointment.styled";
import { TimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { AppointmentSchema } from "../../schemas/AppointmentSchema";

const Appointment = (props: AppointmentProps) => {
  const { name, avatar } = props;
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleTimeChange = (time: any) => {
    setSelectedTime(time);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
    ];
    if (
      !/^\d$/.test(e.key) &&
      !allowedKeys.includes(e.key) &&
      !e.ctrlKey &&
      !e.metaKey
    ) {
      e.preventDefault();
    }
  };
  const initialValues = {
    email: "",
    phone: "",
    name: "",
    comment: "",
  };

  const handleSubmit = async (
    values: InitialAppointmentValues,
    { setSubmitting }: FormikHelpers<InitialAppointmentValues>
  ) => {
    setSubmitting(false);
    const data = {
      ...values,
      time: selectedTime,
    };
    console.log(data);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div>
        {" "}
        <StyledTitle>Make an appointment with a psychologists</StyledTitle>
        <p>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </p>
        <StyledImgWrapper>
          <StyledImg src={avatar} alt="" />
          <div>
            <p>Your psychologists</p>
            <StyledName>{name}</StyledName>
          </div>
        </StyledImgWrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={AppointmentSchema}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <StyledLabel>
                <Field
                  as={StyledInput}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                {errors.name && touched.name ? (
                  <ErrorText>{errors.name}</ErrorText>
                ) : null}
              </StyledLabel>
              <StyledTimeWrapper>
                <StyledPhone>
                  <Field
                    as={StyledInput}
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                      handleKeyDown(e)
                    }
                  />
                  {errors.phone && touched.phone ? (
                    <ErrorText>{errors.phone}</ErrorText>
                  ) : null}
                </StyledPhone>
                <TimePicker
                  label="Meeting time"
                  value={selectedTime}
                  onChange={handleTimeChange}
                />
              </StyledTimeWrapper>
              <StyledLabel>
                <Field
                  as={StyledInput}
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                {errors.email && touched.email ? (
                  <ErrorText>{errors.email}</ErrorText>
                ) : null}
              </StyledLabel>
              <StyledLabel>
                <Field
                  as={StyledComment}
                  name="comment"
                  placeholder="Comment"
                />
                {errors.comment && touched.comment ? (
                  <ErrorText>{errors.comment}</ErrorText>
                ) : null}
              </StyledLabel>
              <StyledBtn type="submit">
                {" "}
                {isSubmitting ? "Sending..." : "Send"}
              </StyledBtn>
            </Form>
          )}
        </Formik>
      </div>
    </MuiPickersUtilsProvider>
  );
};
export default Appointment;
