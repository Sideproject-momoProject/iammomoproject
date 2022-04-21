package dev.sideproject.momo.model;

import java.time.Instant;

public class UserDto {

    private Long id;
    private String email;
    private String password;
    private String username;
    private Instant createAt;

    public UserDto() {
    }

    public UserDto(Long id, String email, String password, String username, Instant createAt) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.username = username;
        this.createAt = createAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Instant getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Instant createAt) {
        this.createAt = createAt;
    }
}
