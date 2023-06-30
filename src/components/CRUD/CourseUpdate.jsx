import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const CourseUpdate = () => {
  const updatedCourse = useLoaderData();

  console.log(updatedCourse);

  const {
    _id,
    course_name,
    course_id,
    admin_email,
    image,
    fee,
    category,
    v1,
    v2,
    v3,
    v4,
    v5,
    v6,
    v7,
    v8,
    v9,
    v10,
    v11,
    v12,
    v13,
    v14,
  } = updatedCourse;

  const handleUpdateCourse = (event) => {
    event.preventDefault();
    const form = event.target;
    const course_name = form.name.value;
    const course_id = form.course_id.value;
    const admin_email = form.admin_email.value;
    const image = form.photo.value;
    const fee = form.fee.value;
    const category = form.category.value;
    const v1 = form.v1.value;
    const v2 = form.v2.value;
    const v3 = form.v3.value;
    const v4 = form.v4.value;
    const v5 = form.v5.value;
    const v6 = form.v6.value;
    const v7 = form.v7.value;
    const v8 = form.v8.value;
    const v9 = form.v9.value;
    const v10 = form.v10.value;
    const v11 = form.v11.value;
    const v12 = form.v12.value;
    const v13 = form.v13.value;
    const v14 = form.v14.value;

    const updatedCourse = {
      course_name,
      course_id,
      admin_email,
      image,
      fee,
      category,
      v1,
      v2,
      v3,
      v4,
      v5,
      v6,
      v7,
      v8,
      v9,
      v10,
      v11,
      v12,
      v13,
      v14,
    };
    fetch(`https://physics-server.vercel.app/courses/${_id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(updatedCourse),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Course Updated Successful",
          icon: "success",
          confirmButtonText: "Well Done",
        });
      });
  };

  return (
    <div className="bg-cyan-200 p-16">
      <h1 className="text-center text-3xl">Update Course</h1>
      <form onSubmit={handleUpdateCourse}>
        {/* form name and quantity row */}
        <div className="md:flex gap-4 ">
          <div className="form-control md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Name</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={course_name}
                  name="name"
                  required
                  type="text"
                  placeholder="Course Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Course ID</span>
              </label>
              <label className="input-group">
                <input
                  name="course_id"
                  required
                  defaultValue={course_id}
                  type="text"
                  placeholder="ID"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex gap-4 ">
          <div className="form-control md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Admin Email</span>
              </label>
              <label className="input-group">
                <input
                  name="admin_email"
                  defaultValue={admin_email}
                  type="text"
                  placeholder="Admin Email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Fee</span>
              </label>
              <label className="input-group">
                <input
                  name="fee"
                  defaultValue={fee}
                  required
                  type="number"
                  placeholder="$ 00.00"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>
        {/* form seller row */}
        <div className="md:flex gap-4 ">
          <div className="form-control md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category </span>
              </label>
              <label className="input-group">
                <input
                  name="category"
                  type="text"
                  defaultValue={category}
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  name="photo"
                  defaultValue={image}
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>
        {/* form category  and details*/}

        <div className="md:flex gap-4 ">
          <div className="form-control md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Video-1</span>
              </label>
              <label className="input-group">
                <input
                  name="v1"
                  type="text"
                  defaultValue={v1}
                  placeholder="Video-1"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Video-2</span>
              </label>
              <label className="input-group">
                <input
                  name="v2"
                  type="text"
                  defaultValue={v2}
                  placeholder="Video-2"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>
        {/* Video2 */}
        <div className="md:flex gap-4 ">
          <div className="form-control md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Video-3</span>
              </label>
              <label className="input-group">
                <input
                  name="v3"
                  defaultValue={v3}
                  type="text"
                  placeholder="Video-3"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Video-4</span>
              </label>
              <label className="input-group">
                <input
                  name="v4"
                  defaultValue={v4}
                  type="text"
                  placeholder="Video-4"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>
        {/* Video-3 */}
        <div className="md:flex gap-4 ">
          <div className="form-control md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Video-5</span>
              </label>
              <label className="input-group">
                <input
                  name="v5"
                  defaultValue={v5}
                  type="text"
                  placeholder="Video-5"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Video-6</span>
              </label>
              <label className="input-group">
                <input
                  name="v6"
                  defaultValue={v6}
                  type="text"
                  placeholder="Video-6"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>
        {/* Video4 */}
        <div className="md:flex gap-4 ">
          <div className="form-control md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Video-7</span>
              </label>
              <label className="input-group">
                <input
                  name="v7"
                  defaultValue={v7}
                  type="text"
                  placeholder="Video-7"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Video-8</span>
              </label>
              <label className="input-group">
                <input
                  name="v8"
                  type="text"
                  defaultValue={v8}
                  placeholder="Video-8"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>
        {/* Video5 */}
        <div className="md:flex gap-4 ">
          <div className="form-control md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Video-9</span>
              </label>
              <label className="input-group">
                <input
                  name="v9"
                  defaultValue={v9}
                  type="text"
                  placeholder="Video-9"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Video-10</span>
              </label>
              <label className="input-group">
                <input
                  name="v10"
                  defaultValue={v10}
                  type="text"
                  placeholder="Video-10"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>
        {/* Video6 */}
        <div className="md:flex gap-4 ">
          <div className="form-control md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Video-11</span>
              </label>
              <label className="input-group">
                <input
                  name="v11"
                  defaultValue={v11}
                  type="text"
                  placeholder="Video-11"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Video-12</span>
              </label>
              <label className="input-group">
                <input
                  name="v12"
                  defaultValue={v12}
                  type="text"
                  placeholder="Video-12"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>
        {/* Video7 */}
        <div className="md:flex gap-4 ">
          <div className="form-control md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Video-13</span>
              </label>
              <label className="input-group">
                <input
                  name="v13"
                  defaultValue={v13}
                  type="text"
                  placeholder="Video-13"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Video-14</span>
              </label>
              <label className="input-group">
                <input
                  name="v14"
                  defaultValue={v14}
                  type="text"
                  placeholder="Video-14"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>

        {/* form naow */}
        <div className="">
          <div className="form-control md:w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="input input-bordered w-full h-16 rounded"
                />
              </label>
            </div>
          </div>
        </div>
        <input
          type="submit"
          value={"Done"}
          className="btn btn-block hover:text-black bg-blue-500 border-none hover:bg-blue-300 my-8"
        />
      </form>
    </div>
  );
};

export default CourseUpdate;
