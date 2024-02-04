package com.example.fresh.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import java.util.Arrays;

import javax.persistence.*;

@Entity
@ToString
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "activity_id")
    private Integer id;
    private String name;
    private String description;
    private Float charges;
    @Lob
    @ToString.Exclude
    private byte[] image;

    @OneToOne(mappedBy = "activity",cascade = CascadeType.ALL,orphanRemoval=true)
    @ToString.Exclude
    @JsonIgnore
    private Ticket ticket;

    @Override
	public String toString() {
		return "Activity [id=" + id + ", name=" + name + ", description=" + description + ", charges=" + charges
				+ ", image=" + Arrays.toString(image) + ", ticket=" + ticket + "]";
	}


	public Activity() {
	}


	public Activity(String name, String description, float charges, byte[] image) {
        this.description = description;
        this.charges = charges;
        this.image = image;
        this.name = name;
    }

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Float getCharges() {
		return charges;
	}

	public void setCharges(Float charges) {
		this.charges = charges;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public Ticket getTicket() {
		return ticket;
	}

	public void setTicket(Ticket ticket) {
		this.ticket = ticket;
	}

    
}
