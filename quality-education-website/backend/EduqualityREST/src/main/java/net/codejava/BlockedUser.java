package net.codejava;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BlockedUser {

	private String Username;
	private Integer VideoID;
	
	public BlockedUser() {

	}
	
	public BlockedUser(String username, Integer videoID) {
		super();
		Username = username;
		VideoID = videoID;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public Integer getVideoID() {
		return VideoID;
	}
	public void setVideoID(Integer videoID) {
		VideoID = videoID;
	}
	
	
}
