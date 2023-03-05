package com.nocountry.cleanreactive.exceptions;

public class CleanCollectionException extends Exception {
    private static final long serialVersionUID = 1L;

    public CleanCollectionException(String message) {

        super(message);
    }

    public static String NotFoundException(String id) {
        return "service-clean with  id: " + id + "not found!";
    }

    public static String TypeAlreadyExists() {
        return "service-clean with given name already exists";
    }
}
