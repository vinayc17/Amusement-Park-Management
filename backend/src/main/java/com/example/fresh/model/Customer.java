package com.example.fresh.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Entity
@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "customer_id")
    private Integer id;
    private String name;
    private String phone;
    private String email;
    private String password;
    private Boolean isAdmin;

    @OneToOne(mappedBy = "customer",cascade = CascadeType.ALL,orphanRemoval=true)
    @ToString.Exclude
    @JsonIgnore
    private Ticket ticket;

    
	public Customer() {
		super();
	}


	public Customer(Integer id, String name, String phone, String email, String password, Boolean isAdmin,
			Ticket ticket) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.isAdmin = isAdmin;
		this.ticket = ticket;
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


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
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


	public Boolean getIsAdmin() {
		return isAdmin;
	}


	public void setIsAdmin(Boolean isAdmin) {
		this.isAdmin = isAdmin;
	}


	public Ticket getTicket() {
		return ticket;
	}


	public void setTicket(Ticket ticket) {
		this.ticket = ticket;
	}


	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + name + ", phone=" + phone + ", email=" + email + ", password="
				+ password + ", isAdmin=" + isAdmin + ", ticket=" + ticket + "]";
	}
    
    
}
