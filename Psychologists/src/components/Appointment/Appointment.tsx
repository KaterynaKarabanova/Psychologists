import { Field, Form, Formik, FormikHelpers } from "formik";
import { AppointmentProps, InitialAppointmentValues } from "../../types/types";
import { useState } from "react";
import "rc-time-picker/assets/index.css";
import {
  StyledBtn,
  StyledInput,
  StyledLabel,
  StyledTitle,
} from "../LogIn/Login.styled";
import {
  CustomTimePicker,
  StyledComment,
  StyledImg,
  StyledImgWrapper,
  StyledName,
  StyledPhone,
  StyledTimeWrapper,
} from "./Appointment.styled";

const Appointment = (props: AppointmentProps) => {
  const { name, avatar } = props;
  const [time, setTime] = useState("10:00");

  //   const onTimeChange = (value) => {
  //     onChange(value);
  //   };
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
      time: time,
    };
    console.log(data);
  };
  return (
    <div>
      {" "}
      <StyledTitle>Make an appointment with a psychologists</StyledTitle>
      <p>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </p>
      <StyledImgWrapper>
        <StyledImg src={avatar} alt="" />
        <div>
          <p>Your psychologists</p>
          <StyledName>{name}</StyledName>
        </div>
      </StyledImgWrapper>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <StyledLabel>
              <Field
                as={StyledInput}
                type="text"
                name="name"
                placeholder="Name"
              />
            </StyledLabel>
            <StyledTimeWrapper>
              <StyledPhone>
                <Field
                  as={StyledInput}
                  type="text"
                  name="phone"
                  placeholder="Phone"
                />
              </StyledPhone>

              <CustomTimePicker
                placeholder="Meeting Time"
                use12Hours
                showSecond={false}
                focusOnOpen={true}
                format="hh:mm"
                onChange={(e) => setTime(e.format("LT"))}
              />
            </StyledTimeWrapper>
            <StyledLabel>
              <Field
                as={StyledInput}
                type="text"
                name="email"
                placeholder="Email"
              />
            </StyledLabel>
            <StyledLabel>
              <StyledComment name="comment" placeholder="Comment" />
            </StyledLabel>
            <StyledBtn type="submit">
              {" "}
              {isSubmitting ? "Sending..." : "Send"}
            </StyledBtn>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Appointment;
