import streamlit as st


def app(event):
    st.balloons()
    return st.write("Hello")


st.balloons()
app()
