import { useState } from "react";
import Container from "../ui/Container";
import styles from "../../scss/sections/Form.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
// import axios from "axios";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  rodo: boolean;
  "accept-email9": boolean;
  "accept-phone9": boolean;
  answers: string;
  totalChecked: string;
  summary: string;
  dealeremail: string;
};

const dealers = [
  {
    name: "Test 1",
    email: "test@test.pl",
  },
  {
    name: "Test 2",
    email: "test@test.pl",
  },
];

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    criteriaMode: "all",
  });
  // const [responseMsg, setResponseMsg] = useState("");
  const [sended, setSended] = useState(false);
  const answers = useSelector((state: RootState) => state.questions.dictionary);
  const totalChecked = useSelector(
    (state: RootState) => state.questions.totalChecked
  );
  const summary = useSelector(
    (state: RootState) => state.summary.summary.question
  );

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    data.summary = JSON.stringify(summary);
    data.answers = JSON.stringify(answers);
    data.totalChecked = JSON.stringify(totalChecked);

    const form_data = new FormData();

    console.log(form_data);

    Object.keys(data).forEach((key) => {
      form_data.append(key, (data as any)[key]);
    });

    setSended(true);

    // axios.post("", form_data)
    // .then(res => {
    //   if(res.status === 200){
    //     setResponseMsg(res.data.msg)
    //     setSended(true)
    //   }
    // })
    // .catch(err => console.log(err))
  };

  return (
    <section>
      <Container>
        {!sended ? (
          <form
            id="form"
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className={styles.form__title}>Dane klienta</h2>
            <div className={styles.form__content}>
              <div className={styles.form__item}>
                <input
                  className={styles.form__input}
                  {...register("firstName", {
                    required: "To pole jest obowiązkowe",
                  })}
                  placeholder="Imię"
                />
                <ErrorMessage
                  errors={errors}
                  name="firstName"
                  render={({ message }) => (
                    <p className={styles.form__error}>{message}</p>
                  )}
                />
              </div>
              <div className={styles.form__item}>
                <input
                  className={styles.form__input}
                  {...register("lastName", {
                    required: "To pole jest obowiązkowe",
                  })}
                  placeholder="Nazwisko"
                />
                <ErrorMessage
                  errors={errors}
                  name="lastName"
                  render={({ message }) => (
                    <p className={styles.form__error}>{message}</p>
                  )}
                />
              </div>

              <div className={styles.form__item}>
                <input
                  type="tel"
                  placeholder="Numer kontaktowy"
                  className={styles.form__input}
                  {...register("phone", {
                    required: "To pole jest obowiązkowe",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Niepoprawny numer telefonu.",
                    },
                    maxLength: {
                      value: 9,
                      message: "To pole może mieć maksymalnie 9 znaków.",
                    },
                  })}
                />

                <ErrorMessage
                  errors={errors}
                  name="phone"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p className={styles.form__error} key={type}>
                        {message}
                      </p>
                    ))
                  }
                />
              </div>
              <div className={styles.form__item}>
                <input
                  className={styles.form__input}
                  type="email"
                  {...register("email", {
                    required: "To pole jest obowiązkowe",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Niepoprawny adres e-mail.",
                    },
                  })}
                  placeholder="Adres e-mail"
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p className={styles.form__error} key={type}>
                        {message}
                      </p>
                    ))
                  }
                />
              </div>

              <div className={styles.form__item}>
                <label
                  htmlFor="date"
                  className={`${styles.form__label} ${styles["form__label-mobile"]}`}
                >
                  Wybierz datę
                </label>
                <input
                  className={styles.form__input}
                  type="date"
                  {...register("date", {
                    required: "To pole jest obowiązkowe",
                  })}
                  placeholder="Numer kontaktowy"
                />
                <ErrorMessage
                  errors={errors}
                  name="date"
                  render={({ message }) => (
                    <p className={styles.form__error}>{message}</p>
                  )}
                />
              </div>
              <div className={styles.form__item}>
                <select
                  className={`${styles.form__input} ${styles.form__select}`}
                  {...register("dealeremail", {
                    required: "To pole jest obowiązkowe",
                  })}
                >
                  <option value="">Wybierz salon</option>
                  {dealers.map((dealer, id) => (
                    <option key={id} value={dealer.email}>
                      {dealer.name}
                    </option>
                  ))}
                </select>
                <ErrorMessage
                  errors={errors}
                  name="dealeremail"
                  render={({ message }) => (
                    <p className={styles.form__error}>{message}</p>
                  )}
                />
              </div>
            </div>
            <div className={styles.form__action}>
              <button type="submit" className={styles.form__button}>
                Wyślij
              </button>
            </div>
          </form>
        ) : (
          <h3 className={styles.form__msg}>
            Formularz zostałby poprawnie wysłany ;)
            <br />
            <br />
            Odpowiedzi które zostałyby przesłane POST'em:
            <br />
            <br />
            <small>{JSON.stringify(answers)}</small>
          </h3>
        )}
      </Container>
    </section>
  );
};

export default Form;
