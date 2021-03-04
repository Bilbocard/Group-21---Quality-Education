package net.codejava;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Video {

	private Integer VideoID;
	private String Title;
	private String Subject;
	private Integer Tier;
	private String VideoLink;
	private String Author;
	private Integer Duration;
	private String Thumbnail;


	public Video() {

	}
	public Video(Integer videoID, String title, String subject, Integer tier, String videoLink, String author,
			Integer duration, String thumbnail) {
		super();
		VideoID = videoID;
		Title = title;
		Subject = subject;
		Tier = tier;
		VideoLink = videoLink;
		Author = author;
		Duration = duration;
		Thumbnail = thumbnail;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getVideoID() {
		return VideoID;
	}
	public void setVideoID(Integer videoID) {
		VideoID = videoID;
	}
	public String getTitle() {
		return Title;
	}
	public void setTitle(String title) {
		Title = title;
	}
	public String getSubject() {
		return Subject;
	}
	public void setSubject(String subject) {
		Subject = subject;
	}
	public Integer getTier() {
		return Tier;
	}
	public void setTier(Integer tier) {
		Tier = tier;
	}
	public String getVideoLink() {
		return VideoLink;
	}
	public void setVideoLink(String videoLink) {
		VideoLink = videoLink;
	}
	public String getAuthor() {
		return Author;
	}
	public void setAuthor(String author) {
		Author = author;
	}
	public Integer getDuration() {
		return Duration;
	}
	public void setDuration(Integer duration) {
		Duration = duration;
	}
	public String getThumbnail() {
		return Thumbnail;
	}
	public void setThumbnail(String thumbnail) {
		Thumbnail = thumbnail;
	}


}
