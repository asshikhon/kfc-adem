import React from "react";
import { MdOutlineRunCircle } from "react-icons/md";

const Cart = () => {
  return (
    <div className="text-black" style={styles.container}>
      <h1 className="text-black" style={styles.title}>Cart</h1>
      
      <div style={styles.content}>
        <div style={styles.iconWrapper}>
          <div style={styles.icon}></div>
        </div>
        <p className="text-black text-lg font-bold" style={styles.text}>
          Your cart is currently empty
        </p>
      </div>
      
      <div style={styles.footer}>
        <div style={styles.status}>
          <MdOutlineRunCircle className="text-black text-4xl mr-2" />
          <span style={styles.statusText}>It’s closed now</span>
        </div>
        <span style={styles.infoIcon}>ℹ️</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    padding: "20px",
    boxSizing: "border-box",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0",
    alignSelf: "flex-start", 
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    width: "100px",
    height: "100px",
    backgroundColor: "#e0e0e0",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "60px",
    height: "60px",
    backgroundColor: "#cccccc",
    borderRadius: "50%",
    opacity: 0.5,
  },
  text: {
    marginTop: "20px",
    fontSize: "24px",
    color: "#555",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderTop: "1px solid #ddd",
    paddingTop: "10px",
  },
  status: {
    display: "flex",
    alignItems: "center",
    color: "red",
  },
  statusIcon: {
    marginRight: "8px",
    fontSize: "18px",
  },
  statusText: {
    fontSize: "14px",
  },
  infoIcon: {
    fontSize: "18px",
    color: "#888",
  },
};

export default Cart;
