import { useEffect, useState, useContext } from "react";
import TicketCard from "../components/TicketCard";
import axios from "axios";

const Dashboard = () => {
  const [tickets, setTickets] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const response = await axios.get("http://localhost:8000/tickets");

    const dataObject = response.data.data;
    const arrayOfKeys = Object.keys(dataObject);
    const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key]);
    console.log(arrayOfData);
    const formattedArray = [];
    arrayOfKeys.forEach((key, i) => {
      const formattedData = { ...arrayOfData[i] };
      formattedData["documentId"] = key;
      formattedArray.push(formattedData);
    });
    setTickets(formattedArray);
  }, []);

  const colors = [
    "rgb(255,179,186)",
    "rgb(255, 223, 186)",
    "rgb(255, 255, 186)",
    "rgb(186, 255, 201)",
    "rgb(186, 255, 255)",
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="dashboard">
      <h1>My projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    key={_index}
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;