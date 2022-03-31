import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TicketPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    status: "not started",
    progress: 0,
    timestamp: new Date().toISOString(),
  });
  const navigate = useNavigate();
  const editMode = false;
  const onSubmit = async (evt) => {
    evt.preventDefault();
    if (!editMode) {
      const response = await axios.post("http://localhost:8000/tickets", {
        formData,
      });
      const success = response.status === 200;
      if (success) {
        navigate("/");
      }
    }
  };
  const onChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const categories = ["test1", "2"];

  return (
    <div className="ticket">
      <h1>{editMode ? "Update ticket" : "Create a ticket"}</h1>
      <div className="ticket-container">
        <form onSubmit={onSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="title"
              onChange={onChange}
              required
              value={formData.title}
            />

            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="description"
              onChange={onChange}
              required
              value={formData.description}
            />
            <label htmlFor="category"> Category</label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={onChange}
            >
              {categories?.map((category, _index) => (
                <option key={_index} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <label htmlFor="new-category">New Category</label>
            <input
              type="text"
              id="new-category"
              name="category"
              placeholder="new category"
              onChange={onChange}
              required
              value={formData.category}
            />

            <label>Priority</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                value={1}
                onChange={onChange}
                checked={formData.priority == 1}
                id="priority-1"
                name="priority"
              />
              <label htmlFor="priority-1">1</label>

              <input
                type="radio"
                value={2}
                onChange={onChange}
                checked={formData.priority == 2}
                id="priority-2"
                name="priority"
              />
              <label htmlFor="priority-2">2</label>

              <input
                type="radio"
                value={3}
                onChange={onChange}
                checked={formData.priority == 3}
                id="priority-3"
                name="priority"
              />
              <label htmlFor="priority-3">3</label>

              <input
                type="radio"
                value={4}
                onChange={onChange}
                checked={formData.priority == 4}
                id="priority-4"
                name="priority"
              />
              <label htmlFor="priority-4">4</label>

              <input
                type="radio"
                value={5}
                onChange={onChange}
                checked={formData.priority == 5}
                id="priority-5"
                name="priority"
              />
              <label htmlFor="priority-5">5</label>
            </div>

            {editMode && (
              <>
                {" "}
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  min="0"
                  max="100"
                  onChange={onChange}
                />
                <label htmlFor="progress">Progress</label>
                <label>Status</label>
                <select
                  name="status"
                  id="status"
                  onChange={onChange}
                  value={formData.status}
                >
                  <option value="done" selected={formData.status === "done"}>
                    Done
                  </option>
                  <option
                    value="working on it"
                    selected={formData.status === "working on it"}
                  >
                    Working on it
                  </option>
                  <option value="stuck" selected={formData.status === "stuck"}>
                    Stuck
                  </option>
                  <option
                    value="not started"
                    selected={formData.status === "not started"}
                  >
                    Not started
                  </option>
                </select>
              </>
            )}

            <input type="submit" />
          </section>

          <section>
            <label htmlFor="owner">Owner</label>
            <input
              type="text"
              id="owner"
              name="owner"
              placeholder="owner"
              onChange={onChange}
              required
              value={formData.owner}
            />

            <label htmlFor="avatar">Avatar</label>
            <input
              type="url"
              id="avatar"
              name="avatar"
              placeholder="avatar"
              onChange={onChange}
              required
              value={formData.avatar}
            />
            <div className="img-preview">
              {formData.avatar && <img src={formData.avatar} alt="avatar" />}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default TicketPage;
