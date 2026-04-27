package com.example.app08.api.request; import jakarta.validation.constraints.NotBlank; public record CreateTicketRequest(@NotBlank String name, @NotBlank String status) {}
