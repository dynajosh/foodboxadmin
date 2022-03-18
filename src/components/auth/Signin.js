import './Signin.css'
import { useFormik } from "formik";
import * as yup from "yup"
import { useState } from 'react'
import {
  InputContainer,
  Input,
  Button,
} from "../styled-components/Inputs";
import { useAuthContext } from "./auth-context/AuthContext";
import { Toast } from '../styled-components/Toast';
import Logo from '../../img/logo.png'
import { useHistory } from 'react-router-dom';


const Login = ()=> {
  const [loading, setLoading] = useState(false);
  const history = useHistory()
  const {currentUser} = useAuthContext()

  const { signin } = useAuthContext();

  const initialValues = {
    email:"",
    password: "",
  }

  let validationSchema = yup.object().shape({
    email: yup.string().email('invalid email address!').required(),
    password: yup.string().required("enter your password")
  })

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
    setLoading(true);
    const {email, password} = values;
      try {
        await signin(email, password)
        console.log("Heyyy")
        setLoading(false)
        Toast.fire({
          icon: "success",
          title: "Logged in",
        })
        history.push('/dashboard')
      } catch (error) {
        console.log(error);
        setLoading(false)
        Toast.fire({
          icon: "error",
          title: "Login Failed",
        })
      }
    }})

    return(
        <div className='loginPage'>
            <div className='loginFormContainer'>
            <form
              className="form"
              onSubmit={formik.handleSubmit}
              autoComplete="off"
            >
              <div className='img-row' >
                <img src={Logo} alt='Logo' width='180px' height='180px'/>
              </div>
              <h3 className='form-heading'>Login to Dashboard</h3>
              <div className="form-group row mb-4">
                <div className="col-12 mb-4">
                  <InputContainer>
                    <Input
                      type="text"
                      required
                      name="email"
                      {...formik.getFieldProps("email")}
                    />
                    <label htmlFor="">Email</label>
                  </InputContainer>
                  {formik.touched.email && formik.errors.email ? (
                  <span className="error-text">{formik.errors.email}</span>
                  ) : null}
              </div>
              <div className="col-12 mb-2">
                  <InputContainer>
                    <Input
                      type="text"
                      required
                      name="password"
                      {...formik.getFieldProps("password")}
                    />
                    <label htmlFor="">Password</label>
                  </InputContainer>
                  {formik.touched.password && formik.errors.password ? (
                  <span className="error-text">{formik.errors.password}</span>
                  ) : null}
              </div>
              </div>
              <Button disabled={formik.isSubmitting} onSubmit={formik.handleSubmit}>
            Login
            {loading && (
              <span className="spinner-border mx-3" role="status"></span>
            )}
          </Button>
              </form>
            </div>
        </div>
        
    )
    
}

export default Login;