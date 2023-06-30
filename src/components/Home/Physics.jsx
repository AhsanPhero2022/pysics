import React from "react";
import { FaDesktop, FaPenSquare, FaQuestion, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardSlides from "./CardSlider";

const Physics = () => {
  return (
    <>
      <div className="bg-indigo-500 ">
        <h2 className="text-center text-2xl font-semibold m-5 p-5 text-white">
          RA Physics Video?
        </h2>
        <div className="grid lg:grid-cols-3 gap-6  mt-5 py-8  lg:py-5">
          <div className="card  card-compact w-60 bg-base-100  shadow-xl">
            <figure>
              <img
                src="https://scontent.frjh1-1.fna.fbcdn.net/v/t39.30808-6/230259822_1994912683997941_9071555770434079385_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=825194&_nc_eui2=AeF8L7N_OV0WrLBRIyHJahczVSaQjJwpj9BVJpCMnCmP0IBXM1d0SNGCoQETn6KspaE4XwQO5ovZMdxP_pnVI1qR&_nc_ohc=3pGKsnZA5aYAX9UhDUh&_nc_ht=scontent.frjh1-1.fna&oh=00_AfAAgqcpDsyyvxAKJQ2q8Jxkth_NGoPcE7JY0GN2rL08gQ&oe=649F69A3"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Vector-1</h2>
              <p>Baisc Thermodynamics | From Basic to Pro | RA Physics</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div>
            <div className="card card-compact  w-60 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://scontent.frjh1-1.fna.fbcdn.net/v/t39.30808-6/230259822_1994912683997941_9071555770434079385_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=825194&_nc_eui2=AeF8L7N_OV0WrLBRIyHJahczVSaQjJwpj9BVJpCMnCmP0IBXM1d0SNGCoQETn6KspaE4XwQO5ovZMdxP_pnVI1qR&_nc_ohc=3pGKsnZA5aYAX9UhDUh&_nc_ht=scontent.frjh1-1.fna&oh=00_AfAAgqcpDsyyvxAKJQ2q8Jxkth_NGoPcE7JY0GN2rL08gQ&oe=649F69A3"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Vector-2</h2>
                <p>Baisc Thermodynamics | From Basic to Pro | RA Physics</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact  w-60 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://scontent.frjh1-1.fna.fbcdn.net/v/t39.30808-6/230259822_1994912683997941_9071555770434079385_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=825194&_nc_eui2=AeF8L7N_OV0WrLBRIyHJahczVSaQjJwpj9BVJpCMnCmP0IBXM1d0SNGCoQETn6KspaE4XwQO5ovZMdxP_pnVI1qR&_nc_ohc=3pGKsnZA5aYAX9UhDUh&_nc_ht=scontent.frjh1-1.fna&oh=00_AfAAgqcpDsyyvxAKJQ2q8Jxkth_NGoPcE7JY0GN2rL08gQ&oe=649F69A3"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Vector-3</h2>
                <p>Baisc Thermodynamics | From Basic to Pro | RA Physics</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact  w-60 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://scontent.frjh1-1.fna.fbcdn.net/v/t39.30808-6/230259822_1994912683997941_9071555770434079385_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=825194&_nc_eui2=AeF8L7N_OV0WrLBRIyHJahczVSaQjJwpj9BVJpCMnCmP0IBXM1d0SNGCoQETn6KspaE4XwQO5ovZMdxP_pnVI1qR&_nc_ohc=3pGKsnZA5aYAX9UhDUh&_nc_ht=scontent.frjh1-1.fna&oh=00_AfAAgqcpDsyyvxAKJQ2q8Jxkth_NGoPcE7JY0GN2rL08gQ&oe=649F69A3"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Vector-4</h2>
                <p>Baisc Thermodynamics | From Basic to Pro | RA Physics</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/register">
            <button className="btn btn-outline btn-info m-8 ">Start Now</button>
          </Link>
        </div>
        {/* Physics section end here */}
      </div>
      <CardSlides></CardSlides>
    </>
  );
};

export default Physics;
