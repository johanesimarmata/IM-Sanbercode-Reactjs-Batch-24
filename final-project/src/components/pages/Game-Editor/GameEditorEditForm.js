import React, { useState, useEffect, useContext } from 'react'
import axios from "axios"
import { useHistory, useParams } from 'react-router'
import {  Form, Input, Select, message, InputNumber, Checkbox, Button  } from "antd"
import { UserContext } from '../../User/UserContext';

const GameEditorForm = (props) => {
    const [user, setUser] = useContext(UserContext)
    const [form] = Form.useForm()
    let history = useHistory()

    let params = useParams()
    const param = params.idGame;
    console.log(param)
    
    useEffect(() => {
        axios.get(`https://backendexample.sanbersy.com/api/data-game/${param}`)
        .then((res) => {
            let genres = res.data.genre.split(",")
            let modes = [];
                if (res.data.singlePlayer === 1) {
                    modes.push(1);
                }
                if (res.data.multiplayer === 1) {
                    modes.push(2);
                }
            form.setFieldsValue({
                name: res.data.name,
                genre: genres,
                platform: res.data.platform,
                release: res.data.release,
                mode: modes,
                image_url: res.data.image_url,
            })
        })
    }, [param, form])

    const onFinish = (values) => {
      let data = {
        name: values.name,
            genre: values.genre.toString(),
            platform: values.platform,
            release: values.release,
            singlePlayer: values.mode.includes(1) ? 1 : 0,
            multiplayer: values.mode.includes(2) ? 1 : 0,
            image_url: values.image_url,
      }
      console.log(data)
      let header = user.token
      axios.put(`https://backendexample.sanbersy.com/api/data-game/${param}`, data,
      {headers: { Authorization: `Bearer ${header}` }}
      ).then((res) => {
        message.success("Your game has been updated")
        history.push("/game-editor")
      })

    }

    const { Option } = Select;
    const options = [{label: "Single Player", value:1}, 
                        {label: "Multi Player", value:2}]
    return(
        <div>
            <h1>Edit your Game here</h1>
            <Form name="game-form" form={form} className="game-form" 
              onFinish={onFinish}
            >
            <Form.Item
                label="Name"
                name="name"
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
            <Option key="1" value="Fantasy">
                Fantasy
            </Option>
            <Option key="2" value="Thriller">
                Thriller
            </Option>
            <Option key="3" value="Science Fiction">
                Science Fiction
            </Option>
            <Option key="4" value="Action">
                Action
            </Option>
            <Option key="5" value="Horror">
                Horror
            </Option>
            <Option key="6" value="Survival">
                Survival
            </Option>
            <Option key="7" value="Historical">
                Historical
            </Option>
            <Option key="8" value="Stealth">
                Stealth
            </Option>
            <Option key="9" value="Business">
                Business
            </Option>
            <Option key="10" value="Comedy">
                Comedy
            </Option>
            <Option key="11" value="Drama">
                Drama
            </Option>
            <Option key="12" value="Non-Fiction">
                Non-Fiction
            </Option>
            <Option key="13" value="Educational">
                Educational
            </Option>
            <Option key="14" value="Sandbox">
                Sandbox
            </Option>
            <Option key="15" value="Kids">
                Kids
            </Option>
            <Option key="16" value="Open World">
                Open World
            </Option>
            <Option key="17" value="Warfare">
                Warfare
            </Option>
            <Option
                key="18"
                value="4X(explore, expand, exploit, and exterminate)"
            >
                4X(explore, expand, exploit, and exterminate)
            </Option>
            <Option key="19" value="Erotic">
                Erotic
            </Option>
            <Option key="20" value="Mistery">
                Mistery
            </Option>
            <Option key="21" value="Party">
                Party
            </Option>
            <Option key="22" value="Romance">
                Romance
            </Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Platform"
                name="platform"
                rules={[
                    {
                        required: true,
                        message: "Please input Game Platform!",
                    },
                ]}
            >
                <Select placeholder="Please select">
                    <Option key="1" value="PC">
                        PC
                    </Option>
                    <Option key="2" value="Playstation 4">
                        Playstation 4
                    </Option>
                    <Option key="3" value="Playstation 3">
                        Playstation 3
                    </Option>
                    <Option key="4" value="Playstation 2">
                        Playstation 2
                    </Option>
                    <Option key="5" value="Playstation">
                        Playstation
                    </Option>
                    <Option key="6" value="Xbox One">
                        Xbox One
                    </Option>
                    <Option key="7" value="Nintendo Switch">
                        Nintendo Switch
                    </Option>
                    <Option key="8" value="Xbox 360">
                        Xbox 360
                    </Option>
                    <Option key="9" value="Android">
                        Android
                    </Option>
                    <Option key="10" value="IOS">
                        IOS
                    </Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Release"
                name="release"
                rules={[
                    {
                        required: true,
                        message: "Please input your Game Release!",
                    },
                ]}
            >
            <InputNumber min={1900} max={2021} />
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
                label="Mode"
                name="mode"
                rules={[
                    {
                        required: true,
                        message: "Please input Mode!",
                    },
                ]}
            >
                <Checkbox.Group options={options} />
            </Form.Item>


            <Form.Item>
                <Button type="success" htmlType="submit" >Submit</Button>
            </Form.Item>
            </Form>
        </div>
    )
    
}
export default GameEditorForm