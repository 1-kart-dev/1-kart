import styles from "./KartItem.module.scss";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";
import { TextField } from "@mui/material";

export default function KartItem(props) {
  const [quantity, setQuantity] = useState(props.item.quantity);
  const [showQuantityField, setShowQuantityField] = useState(false);
  const [qError, setQError] = useState(false);

  const handleQuantityChange = async (change) => {
    var changedQuantity =
      change == "+" ? parseInt(quantity) + 1 : parseInt(quantity) - 1;
    const res = await axios.put(`/api/kart/kartItemQuantity`, {
      item_id: props.item.item_id,
      kart_id: props.kart_id,
      item_quantity: changedQuantity,
    });
    setQuantity(res.data.item_quantity);
    setQError(false);
  };

  const handleClickQuantity = (e) => {
    setShowQuantityField(true);
  };

  const handleQuantityEdit = (e) => {
    if (e.target.value < 1) {
      setQError(true);
    } else {
      setQuantity(e.target.value);
      setQError(false);
    }
  };

  const handleQuantityFieldSubmit = async (e) => {
    const res = await axios.put(`/api/kart/kartItemQuantity`, {
      item_id: props.item.item_id,
      kart_id: props.kart_id,
      item_quantity: quantity,
    });
    setShowQuantityField(false);
    setQuantity(res.data.item_quantity);
    setQError(false);
  };

  return (
    <Grid container={"true"} className={styles.box} spacing={1}>
      <Grid item xs={3} sm={2}>
        <Grid container={"true"} spacing={1}>
          <Grid item xs={3} className={styles.images}>
            {/* BRAND IMAGE */}
          </Grid>
          <Grid item xs={9} className={styles.text}>
            {/* DATE ADDED TO KART */}
          </Grid>
          <Grid item xs={12} className={styles.images}>
            {/* PRODUCT IMAGE */}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9} sm={10}>
        <Grid container={"true"}>
          {/* ITEM NAME, PRICE / RATING, DESCRIPTION, QUANTITY / WISHLIST / SUBKART / REMOVE */}
          <Grid item xs={12} className={styles.itemName}>
            <Typography variant="h6" classes={styles.itemName}>
              <b>{props.item.item_name}</b>
            </Typography>
          </Grid>
          <Grid item xs={12} className={styles.itemPrice}>
            <Typography variant="subtitle1" className={styles.itemPrice}>
              <b>${props.item.price}</b>
            </Typography>
          </Grid>
          <Grid item xs={12} className={styles.itemDesc}>
            {/* ITEM INFO / DESCRPTION */}
            <Typography>
              Size:<b>{props.item.size}</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={4}>
                {/* ITEM QUANTITY */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {quantity > 1 ? (
                    <Button onClick={(e) => handleQuantityChange("-")}>
                      <RemoveCircleIcon />
                    </Button>
                  ) : (
                    <Button disabled>
                      <RemoveCircleIcon color="disabled" />
                    </Button>
                  )}
                  {showQuantityField ? (
                    <TextField
                      className={styles.muiNumberField}
                      type="number"
                      value={quantity}
                      size="small"
                      variant="standard"
                      onChange={handleQuantityEdit}
                      onFocus={(event) => {
                        event.target.select();
                      }}
                      onBlur={handleQuantityFieldSubmit}
                      onKeyDown={(e) => {
                        if (e.key == "Enter") {
                          handleQuantityFieldSubmit(e);
                        }
                      }}
                      error={qError}
                      required
                      style={{ width: 40 }}
                      InputProps={{ inputProps: { min: 1, shrink: true } }}
                      autoFocus
                    />
                  ) : (
                    <Typography onClick={handleClickQuantity}>
                      {quantity}
                    </Typography>
                  )}
                  <Button onClick={(e) => handleQuantityChange("+")}>
                    <AddCircleIcon />
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={2} sm={5}>
                {/* EMPTY SPACE */}
              </Grid>
              <Grid item xs={2} sm={1}>
                {/* ADD TO WISHLIST BUTTON */}
                <Button>
                  <FavoriteBorderIcon />
                </Button>
              </Grid>
              <Grid item xs={2} sm={1}>
                {/* ADD TO SUBKART BUTTON */}
                <Button>
                  <AddShoppingCartIcon />
                </Button>
              </Grid>
              <Grid item xs={2} sm={1}>
                {/* REMOVE FROM KART BUTTON */}
                <Button
                  onClick={() =>
                    props.handleRemove(props.item.item_id, quantity)
                  }
                >
                  <DeleteOutlineIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
