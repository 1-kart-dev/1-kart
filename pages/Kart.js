import React from "react";
import styles from "../styles/Kart.module.scss";
import ReactNavbar from "../components/ReactNavbar";
import MyKart from "../components/MyKart";
import { useTable } from "react-table";
import Navbar from "../components/Navbar";
import LandingFooter from "../components/LandingFooter";
import LoggedIn from "./LoggedIn";
import { useEffect, useState } from "react";
import { useAuth } from "../lib/auth";
import axios from "axios";

export default function Kart() {
  const { authUser, loading } = useAuth();
  const [items, setItems] = useState([]);
  const [kart_id, setKartId] = useState("");

  useEffect(async () => {
    if (authUser) {
      const uid = authUser.uid;
      const mainKart = await axios.get(`/api/users/getMainKart/${uid}`);
      setKartId(mainKart.data.kart_id);
      const kartItems = await axios.get(
        `/api/kart/getKartItems/${mainKart.data.kart_id}`
      );
      setItems(kartItems.data);
    }
  }, [authUser, loading]);

  const handleRemove = async (item_id, item_quantity) => {
    const res = await axios.delete(`/api/kart/addRemoveKartItem/${kart_id}`, {
      data: {
        item_id: item_id,
        item_quantity: item_quantity,
      },
    });
    const kartItems = await axios.get(
      `/api/kart/getKartItems/${res.data.kart_id}`
    );
    setItems(kartItems.data);
  };

  return (
    <LoggedIn>
      <div>
        <Navbar />
        <MyKart items={items} kart_id={kart_id} handleRemove={handleRemove} />
        <LandingFooter />
        {/* <div className = {styles.container}>
                <div className = {styles.tableContainer}>
                    <h2>Your Active Kart</h2>
                    <div className = {styles.itemContainer}>
                        <div className = {styles.logoContainer}>
                            <img src="../nikelogo.png" />
                        </div>
                        <div className = {styles.imgContainer}>
                            <img src="../retro13.jpg" />
                        </div>
                        <div className = {styles.itemDescr}>
                            <h2>Air Jordan Retro 13</h2>
                            <p>Mens/Shoes</p>
                            <p>Black/White/Court Purple</p>
                            <p>Size: 12</p>
                            <p>QTY: 1</p>
                        </div>
                        <div className = {styles.itemMisc}>
                            <h3>Price: $190</h3>
                            <h3>
                                Shipping Information:
                                N/A
                            </h3>
                            <button className = {styles.delete}>Delete</button>
                            <div className = {styles.divider} />
                            <button className = {styles.moveTo}>Move to SubKart</button>
                        </div>
                    </div>
                    <div className = {styles.itemContainer}>
                        <div className = {styles.logoContainer}>
                            <img src="../beatslogo.png" />
                        </div>
                        <div className = {styles.imgContainer}>
                            <img src="../beats-studio3.jpg" />
                        </div>
                        <div className = {styles.itemDescr}>
                            <h2>Beats Studio 3</h2>
                            <p>Electronics/Headphones</p>
                            <p>Midnight Black/Orange</p>
                            <p>QTY: 1</p>
                        </div>
                        <div className = {styles.itemMisc}>
                            <h3>Price: $349.95</h3>
                            <h3>
                                Shipping Information:
                                N/A
                            </h3>
                            <button className = {styles.delete}>Delete</button>
                            <div className = {styles.divider} />
                            <button className = {styles.moveTo}>Move to SubKart</button>
                        </div>
                    </div>
                    <div className = {styles.itemContainer}>
                        <div className = {styles.logoContainer}>
                            <img src="../nikelogo.png" />
                        </div>
                        <div className = {styles.imgContainer}>
                            <img src="../nike-techfleece.jpg" />
                        </div>
                        <div className = {styles.itemContainer}>
                            <div className = {styles.logoContainer}>
                                <img src="../beatslogo.png" />
                            </div>
                            <div className = {styles.imgContainer}>
                                <img src="../beats-studio3.jpg" />
                            </div>
                            <div className = {styles.itemDescr}>
                                <h2>Beats Studio 3</h2>
                                <p>Electronics/Headphones</p>
                                <p>Midnight Black/Orange</p>
                                <p>QTY: 1</p>
                            </div>
                            <div className = {styles.itemMisc}>
                                <h3>Price: $349.95</h3>
                                <h3>
                                    Shipping Information:
                                    N/A
                                </h3>
                                <button className = {styles.delete}>Delete</button>
                                <div className = {styles.divider} />
                                <button className = {styles.moveTo}>Move to SubKart</button>
                            </div>
                        </div>
                        <div className = {styles.itemContainer}>
                            <div className = {styles.logoContainer}>
                                <img src="../nikelogo.png" />
                            </div>
                            <div className = {styles.imgContainer}>
                                <img src="../nike-techfleece.jpg" />
                            </div>
                            <div className = {styles.itemDescr}>
                                <h2>Sportswear Tech Fleece</h2>
                                <p>Mens/Hoodies</p>
                                <p>Brown Basalt/Black</p>
                                <p>Size: L</p>
                                <p>QTY: 1</p>
                            </div>
                            <div className = {styles.itemMisc}>
                                <h3>Price: $110</h3>
                                <h3>
                                    Shipping Information:
                                    N/A
                                </h3>
                                <button className = {styles.delete}>Delete</button>
                                <div className = {styles.divider} />
                                <button className = {styles.moveTo}>Move to SubKart</button>
                            </div>
                        </div>
                    </div>
                </div> */}
      </div>
    </LoggedIn>
  );
}
