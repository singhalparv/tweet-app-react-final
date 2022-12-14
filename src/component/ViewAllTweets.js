import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MytweetList from "./MytweetList";
import { useLocation } from "react-router-dom";
import { url } from "./Url"
import Menu from "./NavBar"
let tweets = [];
export default function ViewAllTweets() {
  let [allTweet, setAllTweet] = useState(tweets);
  const location=useLocation();
  console.log("viewlocation",location)
  function fetchallTweet() {
    fetch(`${url}/all`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => {
        console.log(res)
        return res.json();
      })
      .then((data) => {
        console.log("data",data)
        allTweet = data;
        setAllTweet(allTweet);
      });
  }
  function onDeletehandler(){
    console.log("Deleted!!!")
  }
  function onUpdateHandler(){}
  function onCommentHandler(){}
  useEffect(() => {
    fetchallTweet();
  },[]);
  console.log("allTweet",allTweet)
  return (
    <div>
    <Menu></Menu>
      <Container>
      {
        allTweet.map(function (tweet, index) {
            return (
                <MytweetList tweet={tweet} 
                deletTweet={onDeletehandler} 
                updateTweet={onUpdateHandler} 
                showComment={onCommentHandler}/>
            )}
        )
      }
      </Container>
    </div>
  );
}
