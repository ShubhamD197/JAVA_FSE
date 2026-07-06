package com.cognizant.spring_learn.controller;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            @RequestHeader("Authorization") String authHeader) {

        LOGGER.info("START");

        LOGGER.debug("Authorization Header : {}", authHeader);

        String user = getUser(authHeader);

        LOGGER.debug("User Found : {}", user);

        String token = generateJwt(user);

        LOGGER.debug("Token : {}", token);

        Map<String, String> map = new HashMap<>();

        map.put("token", token);

        LOGGER.info("END");

        return map;
    }

    public String getUser(String authHeader){
        LOGGER.debug("Extracting user from Authorization Header");

        //Separating our encoded credentials from the "Basic" prefix
        String encodedCredentials = authHeader.substring("Basic ".length());

        //Decoding the credentials into byte arraylist
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);

        //converting the byte array into a string
        String Credentials = new String(decodedBytes);

        LOGGER.debug("Credentials : {}", Credentials);

        //getting user from the user:password string
        String user = Credentials.split(":")[0];

        LOGGER.debug("User : {}", user);

        return user;
    }

    private String generateJwt(String user) {

        LOGGER.debug("Generating JWT for {}", user);

        //Creating a JwtBuilder object to build the JWT
        JwtBuilder builder = Jwts.builder();

        //Setting the subject of the JWT to the user
        builder.setSubject(user);

        //Setting the issued at time of the JWT to the current time
        builder.setIssuedAt(new Date());

        //Setting the expiration time of the JWT to 20 minutes from now
        builder.setExpiration(
                new Date(System.currentTimeMillis() + 1200000)
        );

        //Signing the JWT with the HS256 algorithm and a secret key
        builder.signWith(
                SignatureAlgorithm.HS256,
                "JWTsecretkey"
        );

        return builder.compact();
    }
}