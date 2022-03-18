import React, { useContext, useEffect, useState } from "react";

import {
    InputContainer,
    Input,
    InputWithIcon,
    Button,
    CustomSelect,
  } from "../../../../styled-components/Inputs";
  import * as Yup from "yup";
  import { useFormik } from "formik";
  import { Toast } from "../../../../styled-components/Toast";
import axios from "axios";
import { useAuthContext } from "../../../../auth/auth-context/AuthContext";


const AddFood = () => {
  const {userIdToken} = useAuthContext()

    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([])
    const url = "https://api.coinslash.org/v1/coinslash_community/add_food/"

    useEffect(()=>{
      axios.get("https://api.coinslash.org/v1/coinslash_community/get_food_categories_web")
      .then((data)=>console.log(data))
      .then((data)=> setCategories(data))
    })

    const createFood = async (userIdToken, values) => {
      try {
        const res = await axios.post(url, values, {
          headers: {
            Token: `Bearer ${userIdToken}`,
          },
        });
        console.log(res);
        if (res.status === 201) {
          setLoading(false);
          Toast.fire({
            icon: "success",
            title: `${res.data.message}`
          })
        }
      }  catch (error) {
        console.log(error);
        Toast.fire({
          icon: "danger",
          title: `An error occurred please try again!`,
        })
      }
    }

    const initialValues = {
        availability: "",
        availability_saturday: "",
        availability_sunday: "",
        availability_weekday: "",
        food_description: "",
        food_image: "",
        food_name: "",
        food_price: "",
        food_restaurant: "",
        delivery_time: "",
        food_id: "",
        location: "",
        category: "",
      };

      const trueFalse =[
      
        {
          label: "True",
          value: "True"
        },
        {
          label: "False",
          value: "False"
        },
      ]

      const categoriesOptions =[
        {
          label: ""
        }
      ]

      const validationSchema = Yup.object().shape({
        availability_saturday: Yup.string().required("This option is required"),
        availability_sunday: Yup.string().required("This option is required"),
        availability_weekday: Yup.string().required("This option is required"),
        food_description: Yup.string().required("This field is required"),
        food_name: Yup.string().required("This field is required"),
        food_price: Yup.string().required("This field is required"),
        food_restaurant: Yup.string().required("This field is required"),
        delivery_time: Yup.string().required("This field is required"),
        location: Yup.string().required("This field is required"),
        category: Yup.string().required("This field is required"),        
      });
      
    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
        setLoading(true);
    }})

    return(
        <div className="form-wrapper">
      <div className="form-div">
        <h3 className="form-heading"> Add  New Food</h3>
        <form
          className="form"
          onSubmit={formik.handleSubmit}
          autoComplete="off"
        >
          <div className="form-group row mb-4">
            <div className="col-6">
              <InputContainer>
                <Input
                  type="text"
                  required
                  name="food_name"
                  {...formik.getFieldProps("food_name")}
                />
                <label htmlFor="">Food Name</label>
              </InputContainer>
              {formik.touched.food_name && formik.errors.food_name ? (
              <span className="error-text">{formik.errors.food_name}</span>
            ) : null}
            </div>
            
             <div className="col-6">
              <InputContainer>
                <Input
                  type="text"
                  required
                  name="food_price"
                  {...formik.getFieldProps("food_price")}
                />
                <label htmlFor="">Price</label>
              </InputContainer>
              {formik.touched.food_price && formik.errors.food_price ? (
              <span className="error-text">{formik.errors.food_price}</span>
            ) : null}
            </div>
          
          </div>
          <div className="form-group row mb-4">
            <div className="col-6">
              <InputContainer>
                <Input
                  type="text"
                  required
                  name="food_restaurant"
                  {...formik.getFieldProps("food_restaurant")}
                />
                <label htmlFor="">Restaurant</label>
              </InputContainer>
              {formik.touched.food_restaurant && formik.errors.food_restaurant ? (
              <span className="error-text">{formik.errors.food_restaurant}</span>
            ) : null}
            </div>
           
            <div className="col-6">
              <InputContainer>
                <Input
                  type="text"
                  required
                  name="delivery_time"
                  {...formik.getFieldProps("delivery_time")}
                />
                <label htmlFor="">Delivery Time</label>
              </InputContainer>
              {formik.touched.delivery_time && formik.errors.delivery_time ? (
              <span className="error-text">{formik.errors.delivery_time}</span>
            ) : null}
            </div>
           
          </div>
          <div className="form-group row mb-4">
            <div className="col-6">
              <InputContainer>
                <Input
                  type="text"
                  required
                  name="location"
                  {...formik.getFieldProps("location")}
                />
                <label htmlFor="">Location</label>
              </InputContainer>
              {formik.touched.location && formik.errors.location ? (
              <span className="error-text">{formik.errors.location}</span>
            ) : null}
            </div>
         
            <div className="col-6">
              <InputContainer>
                <CustomSelect
                  type="select"
                  required
                  name="category"
                  {...formik.getFieldProps("category")}
                />
                <label htmlFor="">Category</label>
              </InputContainer>
              {formik.touched.category && formik.errors.category ? (
              <span className="error-text">{formik.errors.category}</span>
            ) : null}
            </div>
          </div>
          <div className="form-group row mb-4">
          <div className="col-6">
                {/* <InputContainer> */}
                    <CustomSelect
                    type="select"
                    required
                    name="availability"
                    {...formik.getFieldProps("availability")}
                    options={trueFalse}
                    defaultValue="true"
                    onChange={(e)=>console.log(e)}
                    />
                    {/* <label htmlFor="">Available?</label> */}
                {/* </InputContainer> */}
                {formik.touched.availability && formik.errors.availability ? (
                <span className="error-text">{formik.errors.availability}</span>
                ) : null}
                </div>
            <div className="col-6">
                <InputContainer>
                    <CustomSelect
                    type="select"
                    required
                    options={trueFalse}
                    defaultValue="True"
                    name="availability_saturday"
                    {...formik.getFieldProps("availability_saturday")}
                    />
                    <label htmlFor="">Available on Saturdays?</label>
                </InputContainer>
                {formik.touched.availability_saturday && formik.errors.availability_saturday ? (
                <span className="error-text">{formik.errors.availability_saturday}</span>
                ) : null}
            </div>
           
            </div>
        <div className="form-group row mb-4">
          <div className="col-6">
                <InputContainer>
                    <CustomSelect
                    type="select"
                    required
                    options={trueFalse}
                    defaultValue="True"
                    name="availability_sunday"
                    {...formik.getFieldProps("availability_sunday")}
                    />
                    <label htmlFor="">Available on Sundays?</label>
                </InputContainer>
                {formik.touched.availability_sunday && formik.errors.availability_sunday ? (
                <span className="error-text">{formik.errors.availability_sunday}</span>
                ) : null}
                </div>
            <div className="col-6">
                <InputContainer>
                    <CustomSelect
                    type="select"
                    required
                    name="availability_saturday"
                    options={trueFalse}
                    defaultValue="True"
                    {...formik.getFieldProps("availability_saturday")}
                    />
                    <label htmlFor="">Available on Weekdays?</label>
                </InputContainer>
                {formik.touched.availability_weekday && formik.errors.availability_weekday ? (
                <span className="error-text">{formik.errors.availability_weekday}</span>
                ) : null}
            </div>
           
            </div>
          
          <Button disabled={formik.isSubmitting} onSubmit={formik.handleSubmit}>
            Add Food
            {loading && (
              <span className="spinner-border mx-3" role="status"></span>
            )}
          </Button>

        </form>
      </div>
    </div>
    )
}

export default AddFood;