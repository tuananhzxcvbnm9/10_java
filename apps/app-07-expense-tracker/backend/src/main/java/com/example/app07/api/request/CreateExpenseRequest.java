package com.example.app07.api.request; import jakarta.validation.constraints.NotBlank; public record CreateExpenseRequest(@NotBlank String name, @NotBlank String status) {}
