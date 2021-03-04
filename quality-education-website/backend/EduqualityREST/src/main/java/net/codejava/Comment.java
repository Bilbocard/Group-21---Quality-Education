package net.codejava;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Comment {

	private Integer CommentID;
	private Integer VideoID;
	private Integer ParentID;
	private String Username;
	private String Text;
	
	public Comment() {
		
	}

	public Comment(Integer commentID, Integer videoID, Integer parentID, String username, String text) {
		super();
		CommentID = commentID;
		VideoID = videoID;
		ParentID = parentID;
		Username = username;
		Text = text;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getCommentID() {
		return CommentID;
	}
	public void setCommentID(Integer commentID) {
		CommentID = commentID;
	}
	public Integer getVideoID() {
		return VideoID;
	}
	public void setVideoID(Integer videoID) {
		VideoID = videoID;
	}
	public Integer getParentID() {
		return ParentID;
	}
	public void setParentID(Integer parentID) {
		ParentID = parentID;
	}
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public String getText() {
		return Text;
	}
	public void setText(String text) {
		Text = text;
	}
	
	
}
