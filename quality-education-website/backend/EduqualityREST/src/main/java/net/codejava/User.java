package net.codejava;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

	private String Username;
	private String Name;
	private String Email;
	private String Password;

	public User() {

	}

	public User(String username, String name, String email, String password) {
		super();
		Username = username;
		Name = name;
		Email = email;
		Password = password;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public String getUsername() {
		return Username;
	}

	public void setUsername(String username) {
		Username = username;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

}
