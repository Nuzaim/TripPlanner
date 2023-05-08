import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Avatar } from 'antd';
import { Link } from "react-router-dom";

const dropDown = {
  width : "15%",
}

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="profile">
        Profile
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <Link to="/login">
        Logout
      </Link>
    ),
    danger: true,
  },
];

const ProfileDropDown: React.FC = () => {
  return(
  <Dropdown menu={ {items} } >
    <a onClick={(e) => e.preventDefault()} style={dropDown}>
        <Space direction="horizontal" size={16}>
            <Avatar size={64} icon={<UserOutlined />} />
            <DownOutlined />
        </Space>
    </a>
  </Dropdown>)
  }
;

export default ProfileDropDown;
