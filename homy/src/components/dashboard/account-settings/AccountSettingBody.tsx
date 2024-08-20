"use client";
import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo";
import Link from "next/link";
import React, { useState } from "react";

interface AccountSettingBodyProps {
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  Password: string;
}

const AccountSettingBody = ({
  FirstName,
  LastName,
  Email,
  PhoneNumber,
  Password,
}: AccountSettingBodyProps): JSX.Element => {
  const [formData, setFormData] = useState({
    FirstName,
    LastName,
    Email,
    PhoneNumber,
    Password,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <DashboardHeaderTwo title="Account Settings" />
        <h2 className="main-title d-block d-lg-none">Account Settings</h2>
        <div className="bg-white card-box border-20">
          <h4 className="dash-title-three">Edit & Update</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <div className="col-lg-6">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    placeholder="John"
                    value={formData.FirstName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    id="LastName"
                    name="LastName"
                    value={formData.LastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    id="Email"
                    placeholder="johndoe@gmail.com"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 123 456 789"
                    id="PhoneNumber"
                    name="PhoneNumber"
                    value={formData.PhoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    id="Password"
                    name="Password"
                    value={formData.Password}
                    onChange={handleChange}
                  />
                  <div className="info-text d-sm-flex align-items-center justify-content-between mt-5">
                    <p className="m0">
                      Want to change the password?
                      <Link href="/dashboard/account-settings/password-change">
                        Click here
                      </Link>
                    </p>
                    <Link
                      href="/dashboard/account-settings/password-change"
                      className="chng-pass"
                    >
                      Change Password
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="button-group d-inline-flex align-items-center mt-30">
              <Link href="#" className="dash-btn-two tran3s me-3">
                Save
              </Link>
              <Link href="#" className="dash-cancel-btn tran3s">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingBody;
