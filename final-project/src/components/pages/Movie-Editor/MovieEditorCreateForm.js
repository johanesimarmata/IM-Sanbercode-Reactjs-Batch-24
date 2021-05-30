import React, { useState, useEffect, useContext } from 'react'
import axios from "axios"
import { useHistory } from 'react-router'
import {  Form, Input, Select, message, InputNumber, Slider, Button  } from "antd"
import { UserContext } from '../../User/UserContext';

const MovieEditorCreateForm = () => {
    const [user] = useContext(UserContext)
    const [form] = Form.useForm()
    let history = useHistory()

    const onFinish = (values) => {
      let data = {
        title: values.title,
        genre: values.genre.toString(),
        rating: values.rating,
        duration: values.duration,
        year: values.year,
        description: values.description,
        image_url: values.image_url,
        review: values.review
      }
      console.log(data)
      let header = user.token
      axios.post("https://backendexample.sanbersy.com/api/data-movie", data,
      {headers: { Authorization: `Bearer ${header}` }}
      ).then((res) => {
        message.success("Your movie has been added")
        history.push("/movie-editor")
      })

    }

    const { Option } = Select;
    const {TextArea} = Input;
    return(
        <div>
            <h1>Add your new Movie here</h1>
            <Form name="movie-form" form={form} className="movie-form" validateMessages
              onFinish={onFinish}
            >
            <Form.Item
                label="Title"
                name="title"
                rules={[
                        {
                          required: true,
                          message: "Please input the Title!",
                        },
                ]}
            >
            <Input/>
            </Form.Item>
            <Form.Item
            label="Genre"
            name="genre"
            rules={[
                {
                    required: true,
                    message: "Please input the genre (You can add more than 1 genre)",
                },
            ]}
            >
            <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select"
            >
                <Option key="1" value="Action">
                    Action
                </Option>
                <Option key="2" value="Adventure">
                    Adventure
                </Option>
                <Option key="3" value="Animation">
                    Animation
                </Option>
                <Option key="4" value="Comedy">
                    Comedy
                </Option>
                <Option key="5" value="Crime">
                    Crime
                </Option>
                <Option key="6" value="Documentary">
                    Documentary
                </Option>
                <Option key="7" value="Drama">
                    Drama
                </Option>
                <Option key="8" value="Family">
                    Family
                </Option>
                <Option key="9" value="Fantasy">
                    Fantasy
                </Option>
                <Option key="10" value="History">
                    History
                </Option>
                <Option key="11" value="Horror">
                    Horror
                </Option>
                <Option key="12" value="Music">
                    Music
                </Option>
                <Option key="13" value="Mystery">
                    Mystery
                </Option>
                <Option key="14" value="Romance">
                    Romance
                </Option>
                <Option key="15" value="Science Fiction">
                    Science Fiction
                </Option>
                <Option key="16" value="TV Movie">
                    TV Movie
                </Option>
                <Option key="17" value="Thriller">
                    Thriller
                </Option>
                <Option key="18" value="War">
                    War
                </Option>
                <Option key="19" value="Western">
                    Western
                </Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Review"
                name="review"
                rules={[
                    {
                        required: true,
                        message: "Please input your Movie Review!",
                    },
                ]}
            >
                <TextArea autoSize />
            </Form.Item>
            <Form.Item
                label="Description"
                name="description"
                rules={[
                    {
                        required: true,
                        message: "Please input your Movie Description!",
                    },
                ]}
            >
                <TextArea autoSize />
            </Form.Item>
            
            <Form.Item
                label="Image URL"
                name="image_url"
                rules={[
                    {
                        required: true,
                        message: "Please input the image url!",
                    },
                    {
                        type: "url",
                        message: "The url is not valid!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Duration in Minutes"
                name="duration"
                rules={[
                    {
                        required: true,
                        message: "Please input the movie duration!",
                    },
                ]}
            >
                <InputNumber min={0} />
            </Form.Item>
            <Form.Item
                label="Release Year"
                name="year"
                rules={[
                    {
                        required: true,
                        message: "Please input the release year!",
                    },
                ]}
            >
                <InputNumber min={1900} max={2021} />
            </Form.Item>
            <Form.Item
                label="Rating"
                name="rating"
                rules={[
                    {
                        required: true,
                        message: "Please input the rating!",
                    },
                ]}
            >
                <Slider min={0} max={10} defaultValue={10}/>
            </Form.Item>
            <Form.Item>
                <Button type="success" htmlType="submit" >Submit</Button>
            </Form.Item>
            </Form>
        </div>
    )
    
}
export default MovieEditorCreateForm