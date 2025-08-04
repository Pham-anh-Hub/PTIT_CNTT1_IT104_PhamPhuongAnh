const typeConsole = (type = "log") => {
    console[type]("Đây là type: ", type);
}

typeConsole();
typeConsole("error");
typeConsole("warn");
