package com.example.shared.security;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.Date;
import javax.crypto.SecretKey;
public class JwtTokenProvider { public String issue(String subject,String secret,long ttlSeconds){ SecretKey key=Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8)); Instant now=Instant.now(); return Jwts.builder().subject(subject).issuedAt(Date.from(now)).expiration(Date.from(now.plusSeconds(ttlSeconds))).signWith(key).compact(); } }
